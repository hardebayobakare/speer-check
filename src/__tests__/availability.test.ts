import { getOverlappingSlots } from '../utils/availability';

describe('getOverlappingSlots', () => {
  it('should return overlapping times between candidate and engineers', () => {
    const candidateAvailability = ['Monday 10:00', 'Tuesday 14:00'];
    const engineers = [
      { name: 'Eng1', availability: ['Tuesday 14:00'] },
      { name: 'Eng2', availability: ['Monday 10:00', 'Tuesday 14:30'] }
    ];

    const result = getOverlappingSlots(candidateAvailability, engineers);
    expect(result).toEqual([
      { time: 'Tuesday 14:00', engineer: 'Eng1' },
      { time: 'Monday 10:00', engineer: 'Eng2' }
    ]);
  });
});
