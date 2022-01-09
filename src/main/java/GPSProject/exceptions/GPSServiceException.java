package GPSProject.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class GPSServiceException extends RuntimeException {
    public GPSServiceException(String message) {
        super(message);
    }
}
