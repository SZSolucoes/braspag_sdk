export interface BraspagErro {
    Code: string;
    Message: string;
}
export interface BraspagErroResponse {
    failures?: Array<BraspagErro>;
}
