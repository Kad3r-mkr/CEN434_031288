// import React, { useState } from 'react';
// import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

// const Calculator = () => {
//   const [num1, setNum1] = useState('');
//   const [num2, setNum2] = useState('');
//   const [result, setResult] = useState<number | string>('null');

//   const calculate = (operation: string) => {
//     const a = parseFloat(num1);
//     const b = parseFloat(num2);
//     if (isNaN(a) || isNaN(b)) return;

//     switch (operation) {
//       case '+': setResult(a + b); break;
//       case '-': setResult(a - b); break;
//       case '*': setResult(a * b); break;
//       case '/': setResult(b !== 0 ? a / b : 'Error'); break;
//     }
//   };

//   const clear = () => {
//     setNum1('');
//     setNum2('');
//     setResult('__');
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput style={styles.input} keyboardType="numeric" value={num1} onChangeText={setNum1} placeholder="Num 1" />
//       <TextInput style={styles.input} keyboardType="numeric" value={num2} onChangeText={setNum2} placeholder="Num 2" />
//       <View style={styles.buttons}>
//         <Button title=" + " onPress={() => calculate('+')} />
//         <Button title=" - " onPress={() => calculate('-')} />
//         <Button title=" * " onPress={() => calculate('*')} />
//         <Button title=" / " onPress={() => calculate('/')} />
//       </View>
//       <View style={{ marginVertical: 8 }} />
//         <Button title=" Clear " onPress={clear} />
//       <Text style={styles.resultText}>Result: {result}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 24,
//     marginHorizontal: 20,
//     backgroundColor: '#c26262ff',
//     borderRadius: 16,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.15,
//     shadowRadius: 6,
//     marginBottom: 24,
//   },
//   input: {
//     height: 48,
//     borderColor: '#b0b0b0',
//     borderWidth: 1.5,
//     borderRadius: 8,
//     paddingHorizontal: 14,
//     fontSize: 17,
//     marginBottom: 18,
//     backgroundColor: '#fafbfc',
//   },
//   buttons: {
//     color: '#03fa66ff',
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     fontSize: 20,
//     marginVertical: 5,
//     gap: 10,
//   },
//   resultText: {
//     fontSize: 21,
//     fontWeight: 'bold',
//     color: '#1a4d2e',
//     backgroundColor: '#e6f7ef',
//     padding: 10,
//     borderRadius: 8,
//     marginTop: 10,
//     textAlign: 'center',
//   },
// });

// export default Calculator;


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------


// import React, { useState } from 'react';
// import { StyleSheet, Text, TextInput, View } from 'react-native';

// const WeightConverter = () => {
//   const [kg, setKg] = useState('');
//   const pounds = kg ? (parseFloat(kg) * 2.20462).toFixed(2) : '';

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Enter weight in Kg: </Text>
//       <TextInput
//         style={styles.input}
//         keyboardType="numeric"
//         value={kg}
//         onChangeText={setKg}
//       />
//       <Text style={styles.resultText}>Weight in Pounds: {pounds} lbs</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 24,
//     marginHorizontal: 20,
//     backgroundColor: '#c26262ff',
//     borderRadius: 16,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.15,
//     shadowRadius: 6,
//     marginBottom: 24,
//   },
//   label: {
//     fontSize: 19,
//     marginBottom: 12,
//     fontWeight: '600',
//     color: '#2a2a2a',
//   },
//   input: {
//     width: '50%',
//     height: 48,
//     borderColor: '#b0b0b0',
//     borderWidth: 1.5,
//     borderRadius: 8,
//     paddingHorizontal: 14,
//     fontSize: 17,
//     marginBottom: 18,
//     backgroundColor: '#fafbfc',
//   },
//   resultText: {
//     width: '50%',
//     fontSize: 21,
//     fontWeight: 'bold',
//     color: '#1a4d2e',
//     backgroundColor: '#e6f7ef',
//     padding: 10,
//     borderRadius: 8,
//     marginTop: 10,
//     textAlign: 'center',
//   },
// });

// export default WeightConverter;


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------


// import React, { useState } from 'react';
// import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

// const SimpleTextEditor = () => {
//   const [text, setText] = useState('');
//   const [savedText, setSavedText] = useState('');

//   const saveText = () => setSavedText(text);
//   const clearText = () => {
//     setText('');
//     setSavedText('');
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         multiline
//         value={text}
//         onChangeText={setText}
//         placeholder="Type your text here..."
//       />
//       <View style={styles.buttons}>
//         <Button title="Save" onPress={saveText} />
//         <Button title="Clear" onPress={clearText} />
//       </View>
//       <Text style={styles.resultText}>Saved Text: {savedText}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 24,
//     marginHorizontal: 20,
//     backgroundColor: '#c26262ff',
//     borderRadius: 16,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.15,
//     shadowRadius: 6,
//     marginBottom: 24,
//   },
//   input: {
//     height: 80,
//     borderColor: '#b0b0b0',
//     borderWidth: 1.5,
//     borderRadius: 8,
//     paddingHorizontal: 14,
//     fontSize: 17,
//     marginBottom: 18,
//     backgroundColor: '#fafbfc',
//   },
//   buttons: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     marginVertical: 12,
//     gap: 10,
//   },
//   resultText: {
//     fontSize: 21,
//     fontWeight: 'bold',
//     color: '#1a4d2e',
//     backgroundColor: '#638877ff',
//     padding: 10,
//     borderRadius: 8,
//     marginTop: 10,
//     textAlign: 'center',
//   },
// });

// export default SimpleTextEditor;


// --------------------------------------------------------------------------------------------------------------------------------------------------------------


// import React, { useEffect, useState } from 'react';
// import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

// interface Expenses {
//   id: number;
//   desc: string;
//   amount: number;
// }

// const PersonalBudgetApp = () => {
//   const [income, setIncome] = useState(0);
//   const [expenses, setExpenses] = useState<Expense[]>([]);
//   const [description, setDescription] = useState('');
//   const [amount, setAmount] = useState('');
//   const [balance, setBalance] = useState(0);

//   useEffect(() => {
//     const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
//     setBalance(income - totalExpenses);
//   }, [income, expenses]);

//   const addExpense = () => {
//     if (description && amount) {
//       setExpenses([...expenses, { id: Date.now(), desc: description, amount: parseFloat(amount) }]);
//       setDescription('');
//       setAmount('');
//     }
//   };

//   // Snippet for querying a web service (e.g., external bank accounts)
//   // This fetches mock transaction data from a placeholder API and adds to expenses
//   const fetchBankTransactions = async () => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Placeholder for bank API
//       const data = await response.json();
//       // Assuming data is transactions: map to expenses (in real app, parse amounts in Naira)
//       const newExpenses = data.slice(0, 3).map((item: any, index: number) => ({
//         id: Date.now() + index,
//         desc: `Transaction ${item.id}`,
//         amount: Math.random() * 100, // Mock amount
//       }));
//       setExpenses(prevExpenses => [...prevExpenses, ...newExpenses]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const renderExpense = ({ item }: { item: Expenses }) => (
//     <View style={styles.expenseItem}>
//       <Text style={styles.expenseDesc}>{item.desc}</Text>
//       <Text style={styles.expenseAmount}>₦{item.amount.toFixed(2)}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Personal Budget App</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter monthly income"
//         keyboardType="numeric"
//         value={income.toString()}
//         onChangeText={(text) => setIncome(parseFloat(text) || 0)}
//       />
//       <Text style={styles.balance}>Balance: ₦{balance.toFixed(2)}</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Expense description"
//         value={description}
//         onChangeText={setDescription}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Expense amount"
//         keyboardType="numeric"
//         value={amount}
//         onChangeText={setAmount}
//       />
//       <View style={styles.buttonRow}>
//         <Button title="Add Expense" onPress={addExpense} />
//         <Button title="Fetch Transactions" onPress={fetchBankTransactions} />
//       </View>
//       <FlatList
//         data={expenses}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderExpense}
//         style={styles.expenseList}
//       />
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     padding: 24,
//     marginHorizontal: 20,
//     backgroundColor: '#c26262ff',
//     borderRadius: 16,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.15,
//     shadowRadius: 6,
//     marginBottom: 24,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     textAlign: 'center',
//     color: '#1a4d2e',
//   },
//   input: {
//     height: 48,
//     borderColor: '#b0b0b0',
//     borderWidth: 1.5,
//     borderRadius: 8,
//     paddingHorizontal: 14,
//     fontSize: 17,
//     marginBottom: 12,
//     backgroundColor: '#fafbfc',
//   },
//   balance: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#1a4d2e',
//     backgroundColor: '#e6f7ef',
//     padding: 10,
//     borderRadius: 8,
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 12,
//   },
//   expenseList: {
//     marginTop: 16,
//   },
//   expenseItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   expenseDesc: {
//     fontSize: 16,
//   },
//   expenseAmount: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default PersonalBudgetApp;


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------


// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, FlatList, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// interface NewsItem {
//   title: string;
//   description: string;
//   url: string;
//   urlToImage?: string;
//   publishedAt: string;
//   source: {
//     name: string;
//   };
// }

// const NewsAggregator = () => {
//   const [news, setNews] = useState<NewsItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         // Replace 'YOUR_API_KEY' with your actual NewsAPI key
//         const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=5e8b45dbc42d4700890c01654a3ac895');
//         const data = await response.json();
//         if (data.status === 'ok') {
//           setNews(data.articles);
//         } else {
//           console.error('Error fetching news:', data.message);
//         }
//       } catch (error) {
//         console.error('Error fetching news:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   const renderNewsItem = ({ item }: { item: NewsItem }) => (
//     <TouchableOpacity style={styles.newsItem} onPress={() => Linking.openURL(item.url)}>
//       <Text style={styles.newsTitle}>{item.title}</Text>
//       <Text style={styles.newsDescription}>{item.description}</Text>
//       <Text style={styles.newsSource}>{item.source.name} - {new Date(item.publishedAt).toLocaleDateString()}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>News Aggregator</Text>
//       {loading ? (
//         <ActivityIndicator size="large" color="#1a4d2e" />
//       ) : (
//         <FlatList
//           data={news}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={renderNewsItem}
//           showsVerticalScrollIndicator={false}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     marginHorizontal: 20,
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.15,
//     shadowRadius: 6,
//     marginBottom: 24,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     textAlign: 'center',
//     color: '#1a4d2e',
//   },
//   newsItem: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//     marginBottom: 8,
//   },
//   newsTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//     color: '#333',
//   },
//   newsDescription: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 8,
//   },
//   newsSource: {
//     fontSize: 12,
//     color: '#999',
//     fontStyle: 'italic',
//   },
// });

// export default NewsAggregator;


// --------------------------------------------------------------------------------------------------------------------------------------------------------------