const FollowAndMessage=()=>{
    return <>
    <div className="mt-4 flex absolute right-10 top-24 space-x-4">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                <FontAwesomeIcon
                                                    icon={faUserPlus}
                                                    className="mr-2"
                                                />{" "}
                                                Follow
                                            </button>
                                            <button className="bg-gray-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                                <FontAwesomeIcon
                                                    icon={faEnvelope}
                                                    className="mr-2"
                                                />{" "}
                                                Message
                                            </button>
                                        </div>
    </>
}
export default FollowAndMessage
