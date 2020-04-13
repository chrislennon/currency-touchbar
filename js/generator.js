// Control and logic for the code to generate appropriate output

import Page from './page.js';
import BTTSchema from '../templates/BTTSchema.js'

export default {
    loadTemplate: loadTemplate
}

function loadTemplate(callback) {
    fetch('templates/currency_exchange.py')
    .then(
        response => response.text()
    )
    .then(function(response) {
        Mustache.parse(response);
        generateJSON(response, function(d){
            return callback(d);
        });
    });  
}

function generateJSON(template, cb) {
    const userData = Page.getSelectedWidgets();
    
    let output = new BTTSchema.preset(),
        widgetArray = [];

    userData.forEach((item, i) => {
        let data = {
            base_ticker: item.dataset.baseTicker,
            convert_ticker: item.dataset.convertTicker,
            base_symbol: item.dataset.baseSymbol,
            convert_symbol: item.dataset.convertSymbol,
        };

        let widget = new BTTSchema.widget();
        widget.BTTWidgetName = item.dataset.baseTicker + '_' + item.dataset.convertTicker;
        widget.BTTOrder = i;
        widget.BTTTriggerConfig.BTTTouchBarAppleScriptString = Mustache.render(template, data);
        widget.BTTTriggerConfig.BTTTouchBarScriptUpdateInterval = 900;
        widgetArray.push(widget);
    });

    output.BTTPresetContent[0].BTTTriggers = widgetArray;

    return cb(output);
}
