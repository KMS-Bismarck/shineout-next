const fs = require('fs');
const path = require('path');
const componentNameReg = /^[a-zA-Z]*$/;
const { writeTemplate } = require('./utils/write-template');
const { updatePackages } = require('./dev-remove');
const { compile } = require('./utils/compile');
const component = process.argv.slice(2)?.[0].trim().toLowerCase();

const cssVarTemplatePath = path.join(__dirname, `./ejs/shineout-style.cssvar.ts.ejs`);

if (!component) {
  console.log('\x1b[31m%s\x1b[0m', '[ERROR] Please enter the component name.');
  return;
}

if (!componentNameReg.test(component)) {
  console.log('\x1b[31m%s\x1b[0m', '[ERROR] Component names cannot include special characters.');
  return;
}

const dirs = [
  { path: path.join(__dirname, '../packages', 'base', 'src'), module: 'base' },
  { path: path.join(__dirname, '../packages', 'shineout', 'src'), module: 'shineout' },
  {
    path: path.join(__dirname, '../packages', 'shineout-style', 'src'),
    module: 'shineout-style',
  },
];

function createPublicFilesByEjs(dir) {
  const componentPath = `${dir.path}/${component}`;
  const module = dir.module;
  // Create a base directory.
  fs.mkdirSync(componentPath);

  // Create the __example__ directory under the base directory.
  if (module !== 'shineout-style') {
    fs.mkdirSync(path.join(componentPath, '__example__'));
    fs.mkdirSync(path.join(componentPath, '__test__'));
  } else if (module === 'shineout-style') {
    const templatePath = cssVarTemplatePath;
    const targetPath = path.join(dir.path, 'cssvar');
    const fileName = `${component}.ts`;

    writeTemplate({
      fileName,
      targetPath,
      templatePath,
    });
  }

  // Read all ejs templates under the ./ejs/${module} folder, and read them one by one.
  const templates = fs.readdirSync(path.join(__dirname, `./ejs/${module}`), 'utf-8');

  templates.forEach((template) => {
    // Read the content of the ejs template.
    const targetPath = path.join(componentPath);
    const templatePath = path.join(__dirname, `./ejs/${module}`, template);
    const fileName = template.replace('.ejs', '').replace('component', component);

    writeTemplate({
      fileName,
      targetPath,
      templatePath,
      needPrettier: true,
      prettierWhiteList: ['.md'],
      ejsVars: {
        component,
        Component: component.charAt(0).toUpperCase() + component.slice(1),
      },
    });
  });
}

dirs.forEach((dir) => {
  if (fs.existsSync(`${dir.path}/${component}`)) {
    fs.rmSync(`${dir.path}/${component}`, { recursive: true, force: true });
  }

  createPublicFilesByEjs(dir);

  if (dir.module !== 'shineout-style') {
    const fileName = `s-001-base.tsx`;
    const targetPath = path.join(dir.path, component, '__example__');
    const templatePath = path.join(__dirname, `./ejs/${dir.module}.example.tsx.ejs`);

    writeTemplate({
      fileName,
      targetPath,
      templatePath,
      ejsVars: {
        Component: component.charAt(0).toUpperCase() + component.slice(1),
      },
    });
    compile(dir.path);
  }
});

updatePackages();

console.log('\x1b[32m%s\x1b[0m', `[SUCCESS] ${component} has been created.`);
