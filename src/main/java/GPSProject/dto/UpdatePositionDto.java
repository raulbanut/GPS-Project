package GPSProject.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UpdatePositionDto {

    private float latitude;
    private float longitude;
    private LocalDateTime updateDate;
}
