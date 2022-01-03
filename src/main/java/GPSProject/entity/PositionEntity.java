package GPSProject.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection = "positions")
public class PositionEntity {

    @Id
    private String id;
    private String terminalId;
    private float latitude;
    private float longitude;
    private LocalDateTime creationDate;
    private String updateDate;
}
