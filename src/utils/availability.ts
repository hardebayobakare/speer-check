type Engineer = {
    name: string;
    availability: string[];
  };
  
  export function getOverlappingSlots(
    candidateAvailability: string[],
    engineers: Engineer[]
  ) {
    const overlaps: { time: string; engineer: string }[] = [];
  
    for (const time of candidateAvailability) {
      for (const engineer of engineers) {
        if (engineer.availability.includes(time)) {
          overlaps.push({ time, engineer: engineer.name });
        }
      }
    }
  
    return overlaps;
  }
  