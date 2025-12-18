function getWeekends(day = 'long') {
    if (day === 'short') {
      return ['sat', 'sun'];
    }
    return ['saturday', 'sunday'];
  }
      
const longWeekends = getWeekends('long');
console.log("С аргументом 'long':", longWeekends); 

const shortWeekends = getWeekends('short');
console.log("С аргументом 'short':", shortWeekends);   