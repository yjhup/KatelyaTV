// 1. 导入 Next.js 边缘运行时的响应工具（必选，确保路由能正常返回响应）
import { NextResponse } from 'next/server';

// 2. 定义一个基础的请求处理函数（即使暂时用不到，也避免文件空值报错）
export async function GET() {
  // 暂时返回“未实现”的响应，后续开发时再替换为实际逻辑
  return NextResponse.json(
    { message: 'API route /api/test/simple is not implemented yet' },
    { status: 501 } // 501 状态码表示“未实现”，符合语义
  );
}

// 3. 关键：声明使用 Edge Runtime，适配 Cloudflare 环境
export const runtime = 'edge';
