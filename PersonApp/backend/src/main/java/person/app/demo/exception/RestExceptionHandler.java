package person.app.demo.exception;

import java.time.Instant;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class RestExceptionHandler {

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<?> handleBadRequest(IllegalArgumentException ex) {
        return ResponseEntity.badRequest().body(Map.of(
            "timestamp", Instant.now().toString(),
            "status", HttpStatus.BAD_REQUEST.value(),
            "error", "Bad Request",
            "message", ex.getMessage()
        ));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleInternal(Exception ex) {
        ex.printStackTrace();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of(
            "timestamp", Instant.now().toString(),
            "status", HttpStatus.INTERNAL_SERVER_ERROR.value(),
            "error", "Internal Server Error",
            "message", "Wystąpił błąd po stronie serwera"
        ));
    }
}
