#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
簡單的Python腳本示例
"""

def main():
    """主函數"""
    print("Hello from BAILU Python Script!")
    print("=" * 40)
    
    # 簡單的用戶互動
    name = input("請輸入您的名字: ")
    if name.strip():
        print(f"您好, {name}! 歡迎使用Python腳本!")
    else:
        print("您好! 感謝使用Python腳本!")
    
    # 簡單的循環示例
    print("\n數字計數:")
    for i in range(1, 6):
        print(f"數字: {i}")
    
    print("\n腳本執行完畢!")

if __name__ == "__main__":
    main()