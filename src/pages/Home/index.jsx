import React, { Component } from 'react';
import { useEffect, useState } from "react";
import Pagination from '../../components/Pagination'
import UserCard from '../../components/UserCard'
import { api } from '../../services/axios'
import './style.css';

function Home() {
    const [pageN, setPageN] = useState(1);
    const [userType, setUserType] = useState("");
    const [regions, setRegions] = useState([]);

    const [page, setPage] = useState({
        pageNumber: pageN,
        pageSize: 12,
        totalCount: 2000,
        users: []
    });

    useEffect(() => {
        api.get(`/users/paged?size=12&page=${pageN}${userType ? `&types=${userType}` : ''}${regions.length > 0 ? `&regions=${regions.join(',')}` : ''}`)
            .then(response => {
                const data = response.data;
                setPage(data);
            })
    }, [pageN, userType, regions]);

    const handlePageChange = (newPageN) => {
        setPageN(newPageN);
    }

    const handleCheckboxChangeUserType = (event) => {
        setUserType(event.target.value);
    };

    const handleClearAllUserTypes = () => {
        setUserType('');
    };

    const handleCheckboxChangeRegion = (event) => {
        const region = event.target.value;
        if (regions.includes(region)) {
            setRegions(regions.filter((reg) => reg !== region));
        } else {
            setRegions([...regions, region]);
        }
    };

    const handleClearAllRegion = () => {
        setRegions([]);
    };

    return (
        <>
            <div className='home-container'>

                <div className="checkboxes">
                    <div>
                        <h3>Tipo de usuário</h3>
                        <label className={'form-check'}>
                            <input
                                className={"form-check-input"}
                                type="radio"
                                value=""
                                checked={!userType}
                                onChange={handleClearAllUserTypes}
                            />
                            Todos
                        </label>
                        <label className={'form-check'}>
                            <input
                                className={"form-check-input"}
                                type="radio"
                                value="laborious"
                                checked={userType === 'laborious'}
                                onChange={handleCheckboxChangeUserType}
                            />
                            Trabalhoso
                        </label>
                        <label className={'form-check'}>
                            <input
                                className={"form-check-input"}
                                type="radio"
                                value="normal"
                                checked={userType === 'normal'}
                                onChange={handleCheckboxChangeUserType}
                            />
                            Normal
                        </label>
                        <label className={'form-check'}>
                            <input
                                className={"form-check-input"}
                                type="radio"
                                value="special"
                                checked={userType === 'special'}
                                onChange={handleCheckboxChangeUserType}
                            />
                            Especial
                        </label>
                    </div>

                    <div>
                        <h3>Região</h3>
                        <label className={'form-check form-switch'}>
                            <input
                                className={'form-check-input'}
                                type="checkbox"
                                role="switch"
                                value=""
                                checked={regions.length === 0}
                                onChange={handleClearAllRegion}
                            />
                            Todas
                        </label>
                        <label className={'form-check form-switch'}>
                            <input
                                className={'form-check-input'}
                                type="checkbox"
                                role="switch"
                                value="north"
                                checked={regions.includes('north')}
                                onChange={handleCheckboxChangeRegion}
                            />
                            Norte
                        </label>
                        <label className={'form-check form-switch'}>
                            <input
                                className={'form-check-input'}
                                type="checkbox"
                                role="switch"
                                value="northeast"
                                checked={regions.includes('northeast')}
                                onChange={handleCheckboxChangeRegion}
                            />
                            Nordeste
                        </label>
                        <label className={'form-check form-switch'}>
                            <input
                                className={'form-check-input'}
                                type="checkbox"
                                role="switch"
                                value="midwest"
                                checked={regions.includes('midwest')}
                                onChange={handleCheckboxChangeRegion}
                            />
                            Centro-Oeste
                        </label>
                        <label className={'form-check form-switch'}>
                            <input
                                className={'form-check-input'}
                                type="checkbox"
                                role="switch"
                                value="southeast"
                                checked={regions.includes('southeast')}
                                onChange={handleCheckboxChangeRegion}
                            />
                            Sudeste
                        </label>
                        <label className={'form-check form-switch'}>
                            <input
                                className={'form-check-input'}
                                type="checkbox"
                                role="switch"
                                value="south"
                                checked={regions.includes('south')}
                                onChange={handleCheckboxChangeRegion}
                            />
                            Sul
                        </label>
                    </div>
                </div>

                <div className="listing-container">
                    <div className="row">
                        {page.users.map(user => (
                            <div key={user.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                <UserCard user={user} />
                            </div>
                        )
                        )}
                    </div>
                </div>
            </div>

            <Pagination page={page} onChange={handlePageChange} />

        </>
    )

}

export default Home;
