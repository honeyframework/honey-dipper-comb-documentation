import fs from 'fs';
import fse from 'fs.extra';
import path from 'path';
import { find } from 'lodash';
import childProcess from 'child_process';
import open from 'open';

// TODO ?
// change dippers so they pass data to each other.
// change this to use the generate CSS

export default function honeyDipper({ description, config, guide }) {

  const dipperConfig = find(config.dippers, { name: 'comb-documentation' });

  // 1.
  // Copy the generated CSS
  // to the server location.

  const userStylePath = path.resolve(config.userPath, 'node_modules/honey-dipper-comb-documentation/lib/server/src/data/user-style.css');
  fs.writeFile(userStylePath, guide, 'utf8');

  // 2.
  // Copy the generated data JSON
  // description tree to the server.

  const userDataPath = path.resolve(config.userPath, 'node_modules/honey-dipper-comb-documentation/lib/server/src/data/user-style.json');
  fs.writeFile(userDataPath, JSON.stringify(description), 'utf8');

  // 3.
  // Copy the assets to the server.

  const fromAssetsPath = path.resolve(config.userPath, dipperConfig.assetsPath);
  const toAssetsPath = path.resolve(config.userPath, 'node_modules/honey-dipper-comb-documentation/lib/server/src/data/assets/');

  /*
  fse.copyRecursive(fromAssetsPath, toAssetsPath, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('copied');
    console.log('comb-documentation: done');
  });*/

  // 4.
  // Launch and open the documentation server

  const documentationServer = childProcess.exec(
    `npm start`,
    {
      shell: true,
      detached: true,
      cwd: path.resolve(config.userPath, 'node_modules/honey-dipper-comb-documentation/')
    }
  );

  documentationServer.stdout.on('data', (data) => {
    const cmdOutput = data.toString();
    if (cmdOutput.toLowerCase().indexOf('port') !== -1) {
      console.log('Server running on localhost:5007');
      console.log('Opening documentation site..');
      open('http://localhost:5007/colormap');
    }
  });

  documentationServer.stderr.on('data', (data) => {
    if (data.toString().indexOf('EADDRINUSE') !== -1) {
      documentationServer.stdin.end();
    } else {
      console.log('There was an error launching the documentation server: ', data.toString());
    }
  });

  documentationServer.on('close', (code) => {
    if (code !== 0) {
      console.log(`ps process exited with code ${code}`);
    }
    console.log('closing');
    console.log(documentationServer, documentationServer.pid);
    documentationServer.stdin.end();
  });

  documentationServer.on('disconnect', (code) => {
    console.log('disconnected');
  });

  documentationServer.on('exit', (code) => {
    console.log('exit');
  });

}
