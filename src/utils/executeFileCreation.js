export const executeFileCreation = async (actionFunction) => {
  console.log('Start creating file...');
  const startTime = Date.now();

  await actionFunction();

  const endTime = Date.now();
  console.log(`File creation completed in ${(endTime - startTime) / 1000} seconds.`);
};
