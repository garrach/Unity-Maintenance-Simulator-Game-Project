import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faLink,
    faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
const Pannier = ({ data, user }) => {
    const [openPannier, setOpenPannier] = useState(false);

    const { delete:destroy } = useForm();
    const togglePannier = () => {
        setOpenPannier(!openPannier);
    };

    const handlDelete = (pan) => {
        destroy(route("device.delete", pan));
    };
    return (
        <>
            <div
                id="pop"
                className="absolute z-40 -left-20 -top-2 hover:bg-gray-700 dark:hover:bg-gray-900 flex justify-center items-center rounded-full  w-12 h-12"
            >
                <div className="relative" onClick={togglePannier}>
                    {route().current("dashboard") && (
                        <span
                            style={{
                                width: "25px",
                                height: "25px",
                                fontSize: "10px",
                            }}
                            className="absolute -left-5 top-2 rounded-full flex justify-center items-center  bg-gray-500 block text-gray-300"
                        >
                            {data.pannier && data.pannier.length > 0
                                ? data.pannier.length
                                : 0}
                        </span>
                    )}
                    <FontAwesomeIcon
                        icon={faCartShopping}
                        style={{ color: "orange" }}
                    />
                </div>
            </div>
            {openPannier && route().current("dashboard") && (
                <div className="absolute -left-80 z-40 rounded-lg border-2 p-2 w-auto h-auto bg-gray-700">
                    <h3 className="text-gray-700 dark:text-gray-300">
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            style={{
                                color: "orange",
                                width: "15px",
                                height: "15px",
                            }}
                            className="mr-4"
                        />
                        Pannier
                    </h3>
                    <div className="relative h-32 overflow-y-auto overflow-x-hidden">
                        <table>
                            <tbody>
                                {data.pannier &&
                                    data.pannier.map((items, index) => (
                                        <tr className="m-4 p-4" key={index}>
                                            <td className="text-gray-700 dark:text-gray-300 flex justify-center items-center">
                                                <FontAwesomeIcon
                                                    icon={faLink}
                                                />
                                                Device:
                                            </td>
                                            <td className="text-gray-700 dark:text-gray-300">
                                                {
                                                    data.devices[items.id]
                                                        .serial_number
                                                }
                                                {console.log(
                                                    data.devices[items.id]
                                                        .serial_number
                                                )}
                                            </td>
                                            <td className="text-gray-700 dark:text-gray-300 flex justify-center items-center">
                                                {console.log(items)}
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handlDelete(
                                                            items
                                                        );
                                                    }}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faTrashAlt}
                                                        className="w-4 h-4 hover:text-red-500"
                                                    />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
};
export default Pannier;
