// Control for communication between page and generator

import Page from './page.js';
import Generator from './generator.js';

function exportTemplate(el, method){
    Generator.loadTemplate(function(output){
        let dataDownload = document.createElement('a');

        if (method == 'json') {
            const data = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(output));
            dataDownload.setAttribute('href', 'data:' + data);
            dataDownload.setAttribute('download', 'currency-touchbar-' + Date.now() + '.bttpreset');
        }
        else if (method == 'direct'){
            const data = btoa(unescape(encodeURIComponent(JSON.stringify(output))));
            dataDownload.setAttribute('href', 'btt://jsonimport/' + data);
        }
        dataDownload.click();
    });
}

// On Ready
document.addEventListener('DOMContentLoaded', () => {

    let exportJsonButton = document.getElementById("exportJSON");
    let directExportJsonButton = document.getElementById("directExportJSON");
    
    exportJsonButton.addEventListener("click", function(e){
        e.preventDefault();
        exportTemplate(exportJsonButton, 'json');
    }, false);

    directExportJsonButton.addEventListener("click", function(e){
        e.preventDefault();
        exportTemplate(directExportJsonButton, 'direct');
    }, false);

    Page.loadData();
});

