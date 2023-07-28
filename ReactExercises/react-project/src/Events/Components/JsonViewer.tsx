interface JsonViewerProps {
  json: any;
}

const JsonViewer: React.FC<JsonViewerProps> = ({ json }) => {
  return (
    <pre>
      {json ? JSON.stringify(json, null, 2) : 'No hay datos JSON'}
    </pre>
  );
};

export default JsonViewer;
