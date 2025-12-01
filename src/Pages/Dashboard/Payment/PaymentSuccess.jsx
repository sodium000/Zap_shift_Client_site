import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../hooks/userAxios/useAxiosSecure';

const PaymentSuccess = () => {
      const [searchParams] = useSearchParams();
      const SessionID = searchParams.get("session_id")
      console.log(SessionID);
          const axiosSecure = useAxiosSecure();


          useEffect(() => {
        if (SessionID) {
            axiosSecure.patch(`/payment-success?session_id=${SessionID}`)
                .then(res => {
                    console.log(res.data)
                    // setPaymentInfo({
                    //     transactionId: res.data.transactionId,
                    //     trackingId : res.data.trackingId
                    // })
                })
        }

    }, [SessionID, axiosSecure])
    return (
        <div>
               <h3>pament  succesfull</h3>
        </div>
    );
};

export default PaymentSuccess;