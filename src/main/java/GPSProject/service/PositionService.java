package GPSProject.service;

import GPSProject.dto.CreatePositionDto;
import GPSProject.dto.DateDto;
import GPSProject.dto.PositionDto;
import GPSProject.dto.UpdatePositionDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface PositionService {
    ResponseEntity<PositionDto> create(final CreatePositionDto createPositionDto);

    List<PositionDto> getAll();

    List<PositionDto> getAllByTerminalId(final String terminalId);

    List<PositionDto> getAllByCreationDate(final DateDto dateDto);

    PositionDto update(final String positionId, UpdatePositionDto updatePositionDto);

    void remove(String positionId);
}
