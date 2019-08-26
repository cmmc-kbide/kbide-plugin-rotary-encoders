Blockly.Blocks["rotary_encoder_block"] = {
    init: function() {
      this.appendDummyInput().appendField("ROTARY ENCODER");
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CLK PIN")
        .appendField(new Blockly.FieldTextInput("0"), "ROTARY_ENCODER_CLK_PIN");
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("DT PIN")
        .appendField(new Blockly.FieldTextInput("0"), "ROTARY_ENCODER_DT_PIN");
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SW PIN")
        .appendField(new Blockly.FieldTextInput("0"), "ROTARY_ENCODER_SW_PIN");
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("ROTARY_ENCODER_VALUE"),
          "ROTARY_ENCODER_VALUE"
        );
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };