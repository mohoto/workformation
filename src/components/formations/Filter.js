import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Filter({categories, categorie}) {

    const {pathname} = useRouter();

    return (
        <div className="space-y-6">
            <div className="p-4 rounded-md bg-bleue-karoy-100">
                <div>
                    <h3 className="font-semibold text-white">Categories:</h3>
                    <div className="py-4">
                        <ul className="space-y-2">
                            <li>
                                <Link href={`/formations`} className={`block p-2 capitalize ${pathname === '/formations' ? 'bg-second-50 text-white' : 'bg-gray-100'} rounded-md cursor-pointer hover:bg-second-50 hover:text-white`}>
                                    Toutes nos formations
                                </Link>
                            </li> 
                           {/*  <li className={`p-2 capitalize ${categoryId === '' ? 'bg-second-50 text-white' : 'bg-white'} rounded-md cursor-pointer hover:bg-second-50 hover:text-white`}
                            onClick={getAllFormations}
                            >
                                    Toutes nos formations
                            </li> */}
                            {categories && categories.map(category => (
                                <li key={category.id}>
                                    <Link href={`/formations/${category.slug}`} className={`block p-2 capitalize ${category.slug === categorie ? 'bg-second-50 text-white' : 'bg-white'} rounded-md cursor-pointer hover:bg-second-50 hover:text-white`}>
                                        {category.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}