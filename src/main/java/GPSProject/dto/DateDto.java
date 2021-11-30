package GPSProject.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class DateDto {

    private LocalDateTime startDate;
    private LocalDateTime endDate;
}
