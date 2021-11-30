package GPSProject.dto;

import GPSProject.utils.LocalDateSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Data
@Setter
@Getter
public class CreatePositionDto {

    private String terminalId;
    private float longitude;
    private float latitude;
    @JsonSerialize(using = LocalDateSerializer.class)
    private LocalDateTime creationDate;
}
