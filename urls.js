function loadLeetCode() {
	const urls = [
	//<!-- 0-9: Arrays -->
	"https://leetcode.com/problems/two-sum/",
	"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
	"https://leetcode.com/problems/contains-duplicate/",
	"https://leetcode.com/problems/product-of-array-except-self/",
	"https://leetcode.com/problems/maximum-product-subarray/",
	"https://leetcode.com/problems/maximum-subarray/",
	"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
	"https://leetcode.com/problems/search-in-rotated-sorted-array/",
	"https://leetcode.com/problems/3sum/",
	"https://leetcode.com/problems/container-with-most-water/",
	
	//<!-- 10-14: Binary -->
	"https://leetcode.com/problems/sum-of-two-integers/",
	"https://leetcode.com/problems/number-of-1-bits/",
	"https://leetcode.com/problems/counting-bits/",
	"https://leetcode.com/problems/missing-number/",
	"https://leetcode.com/problems/reverse-bits/",
	
	//<!-- 15-24: Dynamic Programming -->
	"https://leetcode.com/problems/climbing-stairs/",
	"https://leetcode.com/problems/coin-change/",
	"https://leetcode.com/problems/longest-increasing-subsequence/",
	"https://leetcode.com/problems/word-break/",
	"https://leetcode.com/problems/combination-sum-iv/",
	"https://leetcode.com/problems/house-robber/",
	"https://leetcode.com/problems/house-robber-ii/",
	"https://leetcode.com/problems/decode-ways/",
	"https://leetcode.com/problems/unique-paths/",
	"https://leetcode.com/problems/jump-game/",
	
	//<!-- 25-32: Graph, (29, 30 premium) -->
	"https://leetcode.com/problems/clone-graph/",
	"https://leetcode.com/problems/course-schedule/",
	"https://leetcode.com/problems/pacific-atlantic-water-flow/",
	"https://leetcode.com/problems/number-of-islands/",
	"https://leetcode.com/problems/longest-consecutive-sequence/",
	"https://leetcode.com/problems/alien-dictionary/",
	"https://leetcode.com/problems/graph-valid-tree/",
	"https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
	
	// <!-- 33-37: Interval, (35, 36 premium) -->
	"https://leetcode.com/problems/insert-interval/",
	"https://leetcode.com/problems/merge-intervals/",
	"https://leetcode.com/problems/non-overlapping-intervals/",
	"https://leetcode.com/problems/meeting-rooms/",
	"https://leetcode.com/problems/meeting-rooms-ii/",
	
	// <!-- 38-43: Linked List -->
	"https://leetcode.com/problems/reverse-linked-list/",
	"https://leetcode.com/problems/linked-list-cycle/",
	"https://leetcode.com/problems/merge-two-sorted-lists/",
	"https://leetcode.com/problems/merge-k-sorted-lists/",
	"https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
	"https://leetcode.com/problems/reorder-list/",
	
	// <!-- 44-47: Matrix -->
	"https://leetcode.com/problems/set-matrix-zeroes/",
	"https://leetcode.com/problems/spiral-matrix/",
	"https://leetcode.com/problems/rotate-image/",
	"https://leetcode.com/problems/word-search/",
	
	// <!-- 48-57: String, 56 premium -->
	"https://leetcode.com/problems/longest-substring-without-repeating-characters/",
	"https://leetcode.com/problems/longest-repeating-character-replacement/",
	"https://leetcode.com/problems/minimum-window-substring/",
	"https://leetcode.com/problems/valid-anagram/",
	"https://leetcode.com/problems/group-anagrams/",
	"https://leetcode.com/problems/valid-parentheses/",
	"https://leetcode.com/problems/valid-palindrome/",
	"https://leetcode.com/problems/longest-palindromic-substring/",
	"https://leetcode.com/problems/palindromic-substrings/",
	"https://leetcode.com/problems/encode-and-decode-strings/",
	
	// <!-- 58-71: Tree -->
	"https://leetcode.com/problems/maximum-depth-of-binary-tree/",
	"https://leetcode.com/problems/same-tree/",
	"https://leetcode.com/problems/invert-binary-tree/",
	"https://leetcode.com/problems/binary-tree-maximum-path-sum/",
	"https://leetcode.com/problems/binary-tree-level-order-traversal/",
	"https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
	"https://leetcode.com/problems/subtree-of-another-tree/",
	"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
	"https://leetcode.com/problems/validate-binary-search-tree/",
	"https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
	"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
	"https://leetcode.com/problems/implement-trie-prefix-tree/",
	"https://leetcode.com/problems/add-and-search-word-data-structure-design/",
	"https://leetcode.com/problems/word-search-ii/",
	
	// <!-- 72-74: Heap -->
	"https://leetcode.com/problems/merge-k-sorted-lists/",
	"https://leetcode.com/problems/top-k-frequent-elements/",
	"https://leetcode.com/problems/find-median-from-data-stream/"
  ];
    var ele = document.getElementsByName('leetcode');
	if (ele[0].checked) { // Random
		window.location.href = urls[Math.floor(Math.random() * 75)];
	}
	else if (ele[1].checked) { // Non-Premium
		var rand;
		do {
			rand = Math.floor(Math.random() * 75)
		}
		while (rand == 29 || rand == 30 || rand == 35 || rand == 36 || rand == 56);
		window.location.href = urls[rand];
	}
	else if (ele[2].checked) { // Array
		window.location.href = urls[Math.floor(Math.random() * 10)];
	}
	else if (ele[3].checked) { // Binary
		window.location.href = urls[Math.floor(Math.random() * 5)+10];
	}
	else if (ele[4].checked) { // Dynamic Programming
		window.location.href = urls[Math.floor(Math.random() * 10)+15];
	}
	else if (ele[5].checked) { // Graph
		window.location.href = urls[Math.floor(Math.random() * 8)+25];
	}
	else if (ele[6].checked) { // Interval
		window.location.href = urls[Math.floor(Math.random() * 5)+33];
	}
	else if (ele[7].checked) { // Linked List
		window.location.href = urls[Math.floor(Math.random() * 6)+38];
	}
	else if (ele[8].checked) { // Matrix
		window.location.href = urls[Math.floor(Math.random() * 4)+44];
	}
	else if (ele[9].checked) { // String
		window.location.href = urls[Math.floor(Math.random() * 10)+48];
	}
	else if (ele[10].checked) { // Tree
		window.location.href = urls[Math.floor(Math.random() * 14)+58];
	}
	else if (ele[11].checked) { // Heap
		window.location.href = urls[Math.floor(Math.random() * 3)+72];
	}
}