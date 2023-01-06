import React, { useEffect, useState } from 'react'
import { Category } from '../Category';
import { List, Item } from './styles';
import db from '../../../api/db.json';

export const ListOfCategories = () => {
    const [categories, setCategories] = useState(db.categories)
    const [showFixed, setShowFixed] = useState(false)


    useEffect(() => {
        console.log('fetch');
    }, [])
    useEffect( () => {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }

        document.addEventListener('scroll', onScroll)

        //Para limpiar el useEffect
        return () => document.removeEventListener('scroll', onScroll)

    }, [showFixed])

    const listRender = (fixed) => (
        <List className={fixed ? 'fixed' : ''}>
            {
                categories.map(category =>
                    <Item key={category.id}>
                        <Category {...category} />
                    </Item>)
            }
        </List>
    )
    return (
        <>
            {listRender()}
            {showFixed && listRender(true)}
        </>
    )
}