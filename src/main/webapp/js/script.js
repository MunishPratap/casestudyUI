var connectionCount = 1;

$(function() {
	$("#connector").click(function() {
		if (connectionCount == 1) {
			$.ajax({
				method : 'post',
				url : 'DbConnection',
				data : {
					sourceType : $('#sourceType').val(),
					sourceDbName : $('#sourceDb').val(),
					sourceUser : $('#sourceUser').val(),
					sourcePassword : $('#sourcePassword').val(),
					sourceTable : $('#sourceTable').val(),
					targetType : $('#destinationType').val(),
					targetDbName : $('#destinationDb').val(),
					targetUser : $('#destinationUser').val(),
					targetPassword : $('#destinationPassword').val(),
					targetTable : $('#destinationTable').val()
				},
				success : function(responseText) {
					$("#connectionResult").html(responseText);
				}
			});
			connectionCount--;
		} else {
			alert("Already Connected");
		}
	});
});

$(function() {
	$("#matchColCount").click(function() {
		if ($(this).is(":checked")) {
			if (connectionCount == 0) {
				$.ajax({
					method : 'post',
					url : 'ColumnCountValidation',
					success : function(responseText) {
						$("#colCountValidationResult").html(responseText);
					}
				});
			} else {
				alert("Establish connection first");
				$('#matchColCount').prop('checked', false);
			}
		} else {
			$("#colCountValidationResult").html("");
			$('#matchColCount').prop('checked', false);
		}
	});
});

$(function() {
	$("#matchColDataTypes").click(
			function() {
				if ($(this).is(":checked")) {
					if (connectionCount == 0) {
						$("#colDataTypesValidationResult").html(
								"Column datatypes matched");
					} else {
						alert("Establish connection first");
						$('#matchColDataTypes').prop('checked', false);
					}
				} else {
					$("#colDataTypesValidationResult").html("");
					$('#matchColDataTypes').prop('checked', false);
				}
			});
});

$(function() {
	$("#rowByRowValidation").click(
			function() {
				if ($(this).is(":checked")) {
					if (connectionCount == 0) {
						$("#rowByRowValidationResult").html(
								"All rows matched successfully");
					} else {
						alert("Establish connection first");
						$('#rowByRowValidation').prop('checked', false);
					}
				} else {
					$("#rowByRowValidationResult").html("");
					$('#rowByRowValidation').prop('checked', false);
				}
			});
});

$(document).ready(
		function() {
			$("#sampleLimit").keydown(
					function(e) {
						// Allow: backspace, delete, tab, escape, enter and .
						if ($
								.inArray(e.keyCode, [ 46, 8, 9, 27, 13, 110,
										190 ]) !== -1) {
							// let it happen, don't do anything
							return;
						}
						// Ensure that it is a number and stop the keypress
						if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57))
								&& (e.keyCode < 96 || e.keyCode > 105)) {
							e.preventDefault();
						}
					});
		});

$(function() {
	$("#sampleValidation")
			.click(
					function() {
						var inputLength = $("#sampleLimit").val().length;
						if ($(this).is(":checked")) {
							if (inputLength > 0) {
								if (connectionCount == 0) {
									$("#sampleValidationResult")
											.html(
													"Samples from both table matched successfully");
								} else {
									alert("Establish connection first");
									$('#sampleValidation').prop('checked',
											false);
								}
							} else {
								alert("Enter Sample limit first");
								$('#sampleValidation').prop('checked', false);
							}
						} else {
							$("#sampleValidationResult").html("");
							$("#sampleLimit").val("");
						}
					});
});

$(function() {
	$("#customQueryValidation").click(function() {
		if ($(this).is(":checked")) {
			if (connectionCount == 0) {
				$("").show();
			} else {
				alert("Establish connection first");
				$('#customQueryValidation').prop('checked', false);
			}
		} else {
			$("").hide();
			$('#customQueryValidation').prop('checked', false);
		}
	});
});

$(function() {
	$("#outputValidation").click(
			function() {
				if ($(this).is(":checked")) {
					if (connectionCount == 0) {
						if ($("#customQueryValidation").is(":checked")) {
							$("#customQueryOutputValidationResult").html(
									"Output Validation Successful");
						} else {
							alert("Check custom validation menu");
							$('#outputValidation').prop('checked', false);
						}
					} else {
						alert("Establish connection first");
						$('#outputValidation').prop('checked', false);
					}
				} else {
					$("#customQueryOutputValidationResult").html("");
					$('#outputValidation').prop('checked', false);
				}
			});
});

$(function() {
	$("#assertValueValidation")
			.click(
					function() {
						if ($(this).is(":checked")) {
							if (connectionCount == 0) {
								if ($("#customQueryValidation").is(":checked")) {
									var input = $("#assertValue").val().length;
									if (input > 0) {
										$(
												"#customQueryAssertValueValidationResult")
												.html(
														"Assert value Validation Successful");
									} else {
										alert("Input assert value first");
										$('#assertValueValidation').prop(
												'checked', false);
									}
								} else {
									alert("Check custom validation menu");
									$('#assertValueValidation').prop('checked',
											false);
								}
							} else {
								alert("Establish connection first");
								$('#assertValueValidation').prop('checked',
										false);
							}
						} else {
							$("#customQueryAssertValueValidationResult").html(
									"");
							$('#assertValueValidation').prop('checked', false);
						}
					});
});

$(function() {
	$("#resultCountValidation").click(
			function() {
				if ($(this).is(":checked")) {
					if (connectionCount == 0) {
						if ($("#customQueryValidation").is(":checked")) {
							$("#customQueryResultCountValidationResult").html(
									"Result count Validation Successful");
						} else {
							alert("Check custom validation menu");
							$('#resultCountValidation').prop('checked', false);
						}
					} else {
						alert("Establish connection first");
						$('#resultCountValidation').prop('checked', false);
					}
				} else {
					$("#customQueryResultCountValidationResult").html("");
					$('#resultCountValidation').prop('checked', false);
				}
			});
});

$(function() {
	$("#reportgenerator").click(function() {
		alert("Generate Validation Report");
	});
});