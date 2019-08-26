Blockly.JavaScript["rotary_encoder_block"] = function(block) {
    var text_rotary_encoder_clk_pin = block.getFieldValue(
      "ROTARY_ENCODER_CLK_PIN"
    );
    var text_rotary_encoder_dt_pin = block.getFieldValue(
      "ROTARY_ENCODER_DT_PIN"
    );
    var text_rotary_encoder_sw_pin = block.getFieldValue(
      "ROTARY_ENCODER_SW_PIN"
    );
    var variable_rotary_encoder_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("ROTARY_ENCODER_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `

	#SETUP
	//set clkPin,dePin,swPin as INPUT
	pinMode(ROTARY_ENCODER_CLK_PIN, INPUT);
	pinMode(ROTARY_ENCODER_DT_PIN, INPUT);
	pinMode(ROTARY_ENCODER_SW_PIN, INPUT);
	digitalWrite(ROTARY_ENCODER_SW_PIN, HIGH);
	#END

	#EXTINC
	const int ROTARY_ENCODER_CLK_PIN = ${text_rotary_encoder_clk_pin}; //the clk attach to pin 2
	const int ROTARY_ENCODER_DT_PIN = ${text_rotary_encoder_dt_pin}; //the dt pin attach to pin 3
	const int ROTARY_ENCODER_SW_PIN = ${text_rotary_encoder_sw_pin} ;//the sw pin attach to pin 4

	int getEncoderTurn(void)
	{
		static int oldA = HIGH; //set the oldA as HIGH
		static int oldB = HIGH; //set the oldB as HIGH
		int result = 0;
		int newA = digitalRead(ROTARY_ENCODER_CLK_PIN);//read the value of clkPin to newA
		int newB = digitalRead(ROTARY_ENCODER_DT_PIN);//read the value of dtPin to newB
		if (newA != oldA || newB != oldB) //if the value of clkPin or the dtPin has changed
		{
		// something has changed
			if (oldA == HIGH && newA == LOW)
			{
				result = (oldB * 2 - 1);
			}
		}
		oldA = newA;
		oldB = newB;
		return result;
	}
	#END

	int ROTARY_ENCODER_CHANGE = getEncoderTurn();//
	${variable_rotary_encoder_value} = ${variable_rotary_encoder_value} + ROTARY_ENCODER_CHANGE;
    `;
    return code;
  };