export default function RolesCard(props) {
  return (
    <div className="max-w-4xl rounded-2xl border-2 border-gray-100 shadow-md mx-auto mt-8 bg-white">
      {/* container for information */}
      <div className="m-8">
        <div className="mb-8">
          <h3 className="font-bold mb-2">Role Description</h3>
          <p>{props.description}</p>
        </div>
        <div className="mb-8">
          <h3 className="font-bold mb-2">About the Project</h3>
          <p>{props.about}</p>
        </div>
        <div className="mb-8">
          <h3 className="font-bold mb-2">To Apply</h3>
          <p>{props.directions}</p>
        </div>
      </div>
    </div>
  );
}
