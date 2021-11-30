package GPSProject.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class PositionDto extends CreatePositionDto {

    private String id;
    private LocalDateTime updateDate;
}
