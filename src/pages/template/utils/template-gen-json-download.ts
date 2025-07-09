export const templateGenDownloadJson = (json: object, fileName: string) => {
  const jsonString = 'export default ' + JSON.stringify(json);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = fileName.endsWith('.ts') ? fileName : `${fileName}.ts`;
  link.click();

  URL.revokeObjectURL(url);
};
