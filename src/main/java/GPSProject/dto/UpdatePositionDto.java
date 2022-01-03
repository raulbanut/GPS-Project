package GPSProject.dto;

import lombok.Data;

@Data
public class UpdatePositionDto {

    private float latitude;
    private float longitude;
    private String updateDate;
}
