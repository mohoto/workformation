import React, {useState} from 'react'
import {HiOutlineLocationMarker, HiOutlineCalendar, HiOutlineUsers, HiOutlineBadgeCheck} from 'react-icons/hi'

export default function Tab({tabData}) {

    const [openTab, setOpenTab] = useState("1");

  return (
    <div>
        <ul className="flex flex-wrap text-sm font-medium text-center">
            {tabData && tabData.map(tab => (
                <li key={tab.id} className="mr-2 cursor-pointer"
                onClick={() => setOpenTab(tab.id)}
                >
                    <span className={`inline-block px-4 py-3 rounded-t-lg ${openTab === tab.id ? "bg-second-50 text-white" : "bg-gray-100"}`}>{tab.title}</span>
                </li>
            ))}
        </ul>
        <div className="p-3 bg-white border-2 border-second-50">
            {tabData && tabData.map(tab => (
                <div key={tab.id} className={openTab === tab.id ? "block" : "hidden"}>
                    <table className="w-full space-y-20 font-light table-fixed">
                        <tbody>
                            {tab.id !== "3" && (
                                <tr className="font-extralight">
                                    <th scope="row" className="flex items-center text-left font-extralight"><HiOutlineLocationMarker className="h-4 mr-2"/>Lieu</th>
                                    <td>{tab.content.lieu}</td>
                                </tr>
                            )}
                            <tr className="mt-4 font-extralight">
                                <th scope="row" className="flex items-center text-left font-extralight"><HiOutlineCalendar className="h-4 mr-2"/>Durée</th>
                                <td>{tab.content.duree}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4 className="mt-4 text-3xl font-light">{tab.content.prix} €</h4>
                    <p className="mt-2 font-extralight font-xs">Nos formations ne sont pas soumises à la TVA.</p>
                    <p className="mt-6 font-light font-xs">Cette formation est éligible aux financements:</p>
                    <p className="mt-2 font-extralight font-xs">{tab.content.financements.join(", ")}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
