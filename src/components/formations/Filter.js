import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Filter({setFormations, getFormations}) {

    const {pathname} = useRouter();

    const [categoryId, setCategoryId] = useState('');
    const [categories, setCategories] = useState();

    const getCategories = async () => {
        const {data} = await axios.get('/api/categories');
        setCategories(data);
    }

    const getFormationsByCategory = async (categoryId) => {
        setCategoryId(categoryId)
        const {data} = await axios.get(`/api/formations/categorie/${categoryId}`);
        setFormations(data);
    }
    const getAllFormations = () => {
        setCategoryId('')
        getFormations();
    }  

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <div className="space-y-6">
            <div className="p-4 rounded-md bg-bleue-karoy-100">
                <div>
                    <h3 className="font-semibold text-white">Categories:</h3>
                    <div className="py-4">
                        <ul className="space-y-2">
                            {/* <li className={`p-2 capitalize ${pathname === '/formations' ? 'bg-second-50 text-white' : 'bg-gray-100'} rounded-md cursor-pointer hover:bg-second-50 hover:text-white`}>
                                <Link href={`/formations`}>
                                    Toutes nos formations
                                </Link>
                            </li> */}
                            <li className={`p-2 capitalize ${categoryId === '' ? 'bg-second-50 text-white' : 'bg-white'} rounded-md cursor-pointer hover:bg-second-50 hover:text-white`}
                            onClick={getAllFormations}
                            >
                                    Toutes nos formations
                            </li>
                            {categories && categories.map(category => (
                               <li key={category.id} className={`p-2 capitalize ${categoryId === category.id ? 'bg-second-50 text-white' : 'bg-white'} rounded-md cursor-pointer hover:bg-second-50 hover:text-white`}
                                onClick={() => getFormationsByCategory(category.id)}
                                >
                                    {category.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}