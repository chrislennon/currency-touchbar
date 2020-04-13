export default {
    preset: preset,
    widget: widget
}

function preset() {
    return {
        "BTTPresetName": "Currency Conversion",
        "BTTPresetContent": [
            {
                "BTTAppBundleIdentifier": "BT.G",
                "BTTAppName": "Global",
                "BTTAppSpecificSettings": {},
                "BTTTriggers": [
                    {
                        "BTTTouchBarButtonName": "Currency Rate",
                        "BTTTriggerType": 630,
                        "BTTTriggerClass": "BTTTriggerTypeTouchBar",
                        "BTTPredefinedActionType": -1,
                        "BTTPredefinedActionName": "No Action",
                        "BTTEnabled": 1,
                        "BTTOrder": 2,
                        "BTTAdditionalActions": [],
                        "BTTIconData": "**WILL-BE-REPLACED**",
                        "BTTTriggerConfig": {
                            "BTTTouchBarItemIconHeight": 0,
                            "BTTTouchBarItemIconWidth": 0,
                            "BTTTouchBarItemPadding": 0,
                            "BTTTouchBarFreeSpaceAfterButton": "5.000000",
                            "BTTTouchBarButtonColor": "0.000000, 0.000000, 0.000000, 0.000000",
                            "BTTTouchBarAlwaysShowButton": "0",
                            "BTTTouchBarAlternateBackgroundColor": "0.000000, 0.000000, 0.000000, 0.000000"
                        }
                    }
                ]
            }
        ],
        "BTTPresetSnapAreas": []
    }
}

function widget() {
    return {
        "BTTWidgetName": "",
        "BTTTriggerType": 642,
        "BTTTriggerTypeDescription": "Shell Script \/ Task Widget",
        "BTTTriggerClass": "BTTTriggerTypeTouchBar",
        "BTTPredefinedActionType": -1,
        "BTTPredefinedActionName": "No Action",
        "BTTOpenURL": "",
        "BTTEnabled": 1,
        "BTTOrder": 0,
        "BTTIconData": "",
        "BTTShellScriptWidgetGestureConfig" : "\/usr\/bin\/python:::-c",
        "BTTTriggerConfig": {
            "BTTTouchBarAppleScriptStringRunOnInit" : 1,
            "BTTTouchBarItemIconHeight": 22,
            "BTTTouchBarItemIconWidth": 22,
            "BTTTouchBarItemPadding": 0,
            "BTTTouchBarFreeSpaceAfterButton": "5.000000",
            "BTTTouchBarButtonColor": "0.000000, 0.000000, 0.000000, 0.000000",
            "BTTTouchBarAlwaysShowButton": "0",
            "BTTTouchBarAppleScriptString": "**WILL-BE-REPLACED**",
            "BTTTouchBarAlternateBackgroundColor": "0.000000, 0.000000, 0.000000, 0.000000",
            "BTTTouchBarScriptUpdateInterval": 60
        }
    }
}