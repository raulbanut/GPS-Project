package GPSProject.service;

import GPSProject.dto.CreatePositionDto;
import GPSProject.dto.DateDto;
import GPSProject.dto.PositionDto;
import GPSProject.dto.UpdatePositionDto;
import GPSProject.entity.PositionEntity;
import GPSProject.exceptions.MortgageServiceException;
import GPSProject.repository.PositionRepository;
import GPSProject.utils.ErrorMessages;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PositionServiceImpl implements PositionService {

    private final ModelMapper modelMapper;
    private final PositionRepository positionRepository;

    @Override
    public ResponseEntity<PositionDto> create(final CreatePositionDto createPositionDto) {

        checkLatitude(createPositionDto.getLatitude());
        checkLongitude(createPositionDto.getLongitude());

        final PositionEntity positionEntity = modelMapper.map(createPositionDto, PositionEntity.class);
        positionEntity.setCreationDate(LocalDateTime.now());

        final PositionEntity savedPositionEntity = positionRepository.save(positionEntity);

        return ResponseEntity.ok().body(modelMapper.map(savedPositionEntity, PositionDto.class));
    }

    @Override
    public List<PositionDto> getAll() {
        List<PositionEntity> positionEntities = positionRepository.findAll();
        Type type = new TypeToken<List<PositionDto>>() {
        }.getType();
        return modelMapper.map(positionEntities, type);
    }

    @Override
    public List<PositionDto> getAllByTerminalId(String terminalId) {
        List<PositionEntity> positionEntities = positionRepository.findAllByTerminalId(terminalId);
        Type type = new TypeToken<List<PositionDto>>() {
        }.getType();
        return modelMapper.map(positionEntities, type);
    }

    @Override
    public List<PositionDto> getAllByCreationDate(DateDto dateDto) {
        if (dateDto.getStartDate().isAfter(dateDto.getEndDate())) {
            throw new MortgageServiceException(String.format(
                    ErrorMessages.ERROR_START_DATE_IS_AFTER_END_DATE,
                    dateDto.getStartDate(),
                    dateDto.getEndDate()));
        }

        List<PositionEntity> positionRepositoryAll = positionRepository.findAll();
        List<PositionEntity> positionEntities = new ArrayList<>();

        for (PositionEntity positionEntity : positionRepositoryAll) {
            if (positionEntity.getCreationDate().isAfter(dateDto.getStartDate()) &&
                    positionEntity.getCreationDate().isBefore(dateDto.getEndDate())) {
                positionEntities.add(positionEntity);
            }
        }

        if (positionEntities.isEmpty()) {
            throw new MortgageServiceException(String.format(ErrorMessages.ERROR_POSITIONS_BETWEEN_DATES_NOT_EXIST));
        }

        Type type = new TypeToken<List<PositionDto>>() {
        }.getType();
        return modelMapper.map(positionEntities, type);
    }

    @Override
    public PositionDto update(String positionId, UpdatePositionDto updatePositionDto) {
        PositionEntity positionEntity = positionRepository.findById(positionId)
                .orElseThrow(() -> new MortgageServiceException(String.format(ErrorMessages.ERROR_POSITION_DOES_NOT_EXIST, positionId)));

        positionEntity.setUpdateDate(LocalDateTime.now());

        checkLatitude(updatePositionDto.getLatitude());
        checkLongitude(updatePositionDto.getLongitude());

        positionEntity.setLatitude(updatePositionDto.getLatitude());
        positionEntity.setLongitude(updatePositionDto.getLongitude());

        PositionEntity updatedPositionEntity = positionRepository.save(positionEntity);

        return modelMapper.map(updatedPositionEntity, PositionDto.class);
    }

    @Override
    public void remove(String positionId) {
        if (positionRepository.existsById(positionId)) {
            positionRepository.deleteById(positionId);
        } else {
            throw new MortgageServiceException(String.format(
                    ErrorMessages.ERROR_POSITION_DOES_NOT_EXIST,
                    positionId));
        }
    }

    public void checkLatitude(float latitude) {
        if (latitude < -90 || latitude > 90)
            throw new MortgageServiceException(String.format(ErrorMessages.ERROR_LATITUDE_NOT_EXIST, latitude));
    }

    public void checkLongitude(float longitude) {
        if (longitude < -180 || longitude > 180)
            throw new MortgageServiceException(String.format(ErrorMessages.ERROR_LONGITUDE_NOT_EXIST, longitude));
    }
}
