import { useEffect, useState } from 'react';
import Router from 'next/router';

import useRequest from '../../../hooks/use-request';

const OrderCancel = ({ order, currentUser }) => {
  const { doRequest, errors } = useRequest({
    url: `http://localhost:3003/api/orders/cancel/${order.id}`,
    method: 'post',
    body: {},
    onSuccess: (payment) => Router.push('/orders')
  });

  useEffect(() => {
    doRequest()
  }, [])

  return <div></div>
};

OrderCancel.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`http://localhost:3003/api/orders/${orderId}`);

  return { order: data };
}

export default OrderCancel;