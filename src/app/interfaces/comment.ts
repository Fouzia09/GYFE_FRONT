export interface CommentIN {
    author: string;
    content: string;
    user?: string;
    restaurant?: string;
    room?: string;
}

export interface CommentOUT {
    id: number;
    author: string;
    content: string;
    createdAt: Date;
    restaurantId?: number;
    roomId?: number;
    userId?: number;
}
