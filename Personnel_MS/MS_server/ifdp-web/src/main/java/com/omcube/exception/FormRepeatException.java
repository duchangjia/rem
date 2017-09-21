package com.omcube.exception;

public class FormRepeatException extends RuntimeException {
	
	private static final long serialVersionUID = 3658402099027056274L;

	public FormRepeatException(String message) {
		super(message);
	}

	public FormRepeatException(String message, Throwable cause) {
		super(message, cause);
	}
}
