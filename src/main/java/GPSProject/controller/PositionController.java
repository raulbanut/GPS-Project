package GPSProject.controller;

import GPSProject.dto.CreatePositionDto;
import GPSProject.dto.DateDto;
import GPSProject.dto.PositionDto;
import GPSProject.dto.UpdatePositionDto;
import GPSProject.service.PositionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/positions")
@RequiredArgsConstructor
public class PositionController {

    private final PositionService positionService;

    @PostMapping("/create")
    public ResponseEntity<PositionDto> create(@RequestBody final CreatePositionDto position) {
        return positionService.create(position);
    }

    @GetMapping("/all")
    public ResponseEntity<List<PositionDto>> getAll() {
        return new ResponseEntity<>(positionService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/find/{terminalId}")
    public ResponseEntity<List<PositionDto>> getAllByTerminalId(@PathVariable String terminalId) {
        return new ResponseEntity<>(positionService.getAllByTerminalId(terminalId), HttpStatus.OK);
    }

    @GetMapping("/find/allByCreationDate")
    public ResponseEntity<List<PositionDto>> getAllByCreationDate(@RequestBody DateDto dateDto) {
        return new ResponseEntity<>(positionService.getAllByCreationDate(dateDto), HttpStatus.OK);
    }

    @PatchMapping("/update/{positionId}")
    public ResponseEntity<PositionDto> update(@PathVariable String positionId,
                                              @RequestBody UpdatePositionDto updatePositionDto) {
        return new ResponseEntity<>(positionService.update(positionId, updatePositionDto), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{positionId}")
    public ResponseEntity<Void> delete(@PathVariable String positionId) {
        positionService.remove(positionId);
        return ResponseEntity.ok().build();
    }
}
