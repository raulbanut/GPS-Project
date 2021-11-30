package GPSProject.repository;

import GPSProject.entity.PositionEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PositionRepository extends MongoRepository<PositionEntity, String> {
    List<PositionEntity> findAllByTerminalId(String terminalId);
}
