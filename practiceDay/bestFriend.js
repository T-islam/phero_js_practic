// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।

function bestFriend(array) {
  let friendLength = 0;
  let friendName;

  for (let i = 0; i < array.length; i++) {
    const friend = array[i];
    if (friend.length > friendLength) {
      friendLength = friend.length;
      friendName = friend;
    }
  }
  return friendName;
}
const friends = [
  "abdul Rahim",
  "karim",
  "jalal Uddin",
  "al-amin",
  "solim Uddin ahmed",
  "geyas Mahmud",
];

const friendName = bestFriend(friends);
console.log(friendName);
