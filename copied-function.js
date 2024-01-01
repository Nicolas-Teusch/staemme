
var o = [
    {
        "name": "attack",
        "value": "true"
    },
    {
        "name": "ch",
        "value": "988d647389f02a2f65b3b4f2405b1d96:45708f65e65f971748371aaaf4dbc19ce8d438cec6a73cf2f3c77ca27cea9ff9"
    },
    {
        "name": "cb",
        "value": "troop_confirm_submit"
    },
    {
        "name": "x",
        "value": "529"
    },
    {
        "name": "y",
        "value": "502"
    },
    {
        "name": "source_village",
        "value": "832"
    },
    {
        "name": "village",
        "value": "832"
    },
    {
        "name": "attack_name",
        "value": ""
    },
    {
        "name": "spear",
        "value": "0"
    },
    {
        "name": "sword",
        "value": "0"
    },
    {
        "name": "axe",
        "value": "0"
    },
    {
        "name": "spy",
        "value": "0"
    },
    {
        "name": "light",
        "value": "0"
    },
    {
        "name": "heavy",
        "value": "0"
    },
    {
        "name": "ram",
        "value": "0"
    },
    {
        "name": "catapult",
        "value": "0"
    },
    {
        "name": "knight",
        "value": "1"
    },
    {
        "name": "snob",
        "value": "0"
    },
    {
        "name": "building",
        "value": "main"
    },
    {
        "name": "h",
        "value": "8dc43537"
    },
    {
        "name": "h",
        "value": "8dc43537"
    }
]

sendTroops: function() {
    var o = $("#command-data-form").serializeArray();
    return o.push({
        name: CommandPopup.target_widget.clicked_button,
        value: "l"
    }),
    TribalWars.post("place", {
        ajax: "confirm"
    }, o, function(o) {
        Dialog.show("popup_command", o.dialog),
        $("#command-data-form").on("submit", CommandPopup.confirmSendTroops),
        $("#troop_confirm_back").on("click", CommandPopup.goBack)
    }),
    !1
},

confirmSendTroops: function() {
    var o = $("#command-data-form").serializeArray();
    return TribalWars.post("place", {
        ajaxaction: "popup_command"
    }, o, function(o) {
        Dialog.close(),
        UI.SuccessMessage(o.message);
        for (var n = 0; n < CommandPopup.command_sent_hooks.length; n++)
            CommandPopup.command_sent_hooks[n](o)
    }),
    !1
}