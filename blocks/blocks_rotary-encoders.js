Blockly.Blocks['rotary_encoder_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ROTARY ENCODER");
    this.appendValueInput("ROTARY_ENCODER_CLK_PIN")
        .setCheck("Number")
        .appendField("CLK PIN");
    this.appendValueInput("ROTARY_ENCODER_DT_PIN")
        .setCheck("Number")
        .appendField("DT PIN");
    this.appendValueInput("ROTARY_ENCODER_SW_PIN")
        .setCheck("Number")
        .appendField("SW PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};