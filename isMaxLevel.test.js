const { isMaxLevel, ids } = require("./build");

describe('isMaxLevel', () => {

    it('should return true when the buildId is barracks and the current level is greater than or equal to 25', () => {
      // Arrange
      const buildId = ids.barracks;
      const currentBuildLevel = { barracks: { currentLevel: 25 } };
      getCurrentBuildLevel.mockReturnValue(currentBuildLevel);
  
      // Act
      const result = isMaxLevel(buildId);
  
      // Assert
      expect(result).toBe(true);
    });
  
    it('should return false when the buildId is barracks and the current level is less than 25', () => {
      // Arrange
      const buildId = ids.barracks;
      const currentBuildLevel = { barracks: { currentLevel: 24 } };
      getCurrentBuildLevel.mockReturnValue(currentBuildLevel);
  
      // Act
      const result = isMaxLevel(buildId);
  
      // Assert
      expect(result).toBe(false);
    });
  
    it('should throw an error when the buildId is invalid', () => {
      // Arrange
      const buildId = 'invalid';
  
      // Act & Assert
      expect(() => isMaxLevel(buildId)).toThrow('Invalid buildID');
    });
  
    // Add more test cases for the other buildIds here
  
  });
  