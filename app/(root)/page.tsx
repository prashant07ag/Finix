import HeaderBox from '@/components/headerBox'
import RightSidebar from '@/components/rightSidebar';
import TotalBalanceBox from '@/components/totalBalancebox'
import React from 'react'

const Home = () => {
    const loggedIn = {firstName: 'John', lastName: 'Doe'};
    return (
        <section className="home">
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently." />

                    <TotalBalanceBox accounts={[]} 
                        totalBanks={1}
                        totalCurrentBalance={1000}
                    />
                </header>

                recent transactions.
            </div>

            <RightSidebar user={loggedIn} transactions={[]} banks={[{},{}]} />
        </section>
    )
}

export default Home
