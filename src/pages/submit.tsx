// pages/submit.tsx
const SubmitObservation = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-xl font-bold">Submit Observation</h1>
            <form>
                <input
                    placeholder="Species Name"
                    type="text"
                    className="block w-full mb-4 px-3 py-2"
                />
                <textarea
                    placeholder="Description"
                    className="block w-full mb-4 px-3 py-2"
                />
                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                    Submit Observation
                </button>
            </form>
        </div>
    );
};

export default SubmitObservation;
