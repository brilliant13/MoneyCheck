//src/pages/Group/GroupDetail.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { GroupDetailTemplate } from '../../components/GroupTab';

const GroupDetail = () => {
    // 각 탭별 더미 데이터를 먼저 선언
    const familyGoals = [
        {
            title: "호텔 뷔페",
            emoji: "🍽️",
            level: 1,
            progress: 0.7
        },
        {
            title: "미국여행",
            emoji: "🇺🇸",
            level: 1,
            progress: 0.4
        }
    ];

    const universityGoals = [
        {
            title: "동창회 회식",
            emoji: "🍺",
            level: 2,
            progress: 0.3
        },
        {
            title: "MT 여행",
            emoji: "🏕️",
            level: 3,
            progress: 0.8
        }
    ];

    const girlfriendGoals = [
        {
            title: "커플링",
            emoji: "💍",
            level: 2,
            progress: 0.6
        },
        {
            title: "제주도 여행",
            emoji: "✈️",
            level: 4,
            progress: 0.2
        }
    ];

    // 각 그룹별 거래 데이터
    const familyTransactions = {
        income: [
            { id: 1, name: "지윤", amount: "30,000", date: "10.24" },
            { id: 2, name: "엄마", amount: "50,000", date: "10.24" }
        ],
        expense: [
            { id: 1, name: "아빠", amount: "20,000", date: "10.24" },
            { id: 2, name: "정윤", amount: "40,000", date: "10.24" }
        ]
    };

    const universityTransactions = {
        income: [
            { id: 1, name: "정웅", amount: "15,000", date: "10.24" },
            { id: 2, name: "차민", amount: "25,000", date: "10.24" }
        ],
        expense: [
            { id: 1, name: "지윤", amount: "35,000", date: "10.24" },
            { id: 2, name: "경민", amount: "45,000", date: "10.24" }
        ]
    };

    const girlfriendTransactions = {
        income: [
            { id: 1, name: "지윤", amount: "10,000", date: "10.24" },
            { id: 2, name: "수민", amount: "500,000", date: "10.24" }
        ],
        expense: [
            { id: 1, name: "데이트", amount: "150,000", date: "10.24" },
            { id: 2, name: "선물", amount: "50,000", date: "10.24" }
        ]
    };

    // useState 호출은 상수 선언 이후에
    const [currentGoals, setCurrentGoals] = useState(familyGoals);
    const [currentTransactions, setCurrentTransactions] = useState(familyTransactions);

    const handleTabChange = (tab) => {
        switch (tab) {
            case '우리가족':
                setCurrentGoals(familyGoals);
                setCurrentTransactions(familyTransactions);
                break;
            case '대학동창':
                setCurrentGoals(universityGoals);
                setCurrentTransactions(universityTransactions);
                break;
            case '여자친구':
                setCurrentGoals(girlfriendGoals);
                setCurrentTransactions(girlfriendTransactions);
                break;
            default:
                setCurrentGoals([]);
                setCurrentTransactions({ income: [], expense: [] });
        }
    };

    return (
        <View style={styles.container}>
            <GroupDetailTemplate 
                goals={currentGoals} 
                transactions={currentTransactions}
                onTabChange={handleTabChange} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});

export default GroupDetail;
