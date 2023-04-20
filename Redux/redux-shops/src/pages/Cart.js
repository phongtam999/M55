import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LayoutMaster from '../layouts/LayoutMaster';
import { useDispatch, useSelector } from "react-redux";

function Cart(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const carts = useSelector( state => state.carts )

    return (
        <LayoutMaster>
            <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
                    <table className='table table-striped table-hover'>
                        <tr>
                            <th>STT</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                            <th>Tổng Tiền </th>
                        </tr>
                        {
                            carts.map( (product) => (
                                <tr>
                                    <th>{ product.id }</th>
                                    <th>{ product.name }</th>
                                    <th>{ product.price }</th>
                                    <th>{ product.qty }</th>
                                    <th>{ (product.qty) * (product.price) }</th>
                                </tr>
                            ))
                        }
                    </table>                  
                </div>
            </div>
        </LayoutMaster>
    );
}

export default Cart;