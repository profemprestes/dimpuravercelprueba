import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function AuthErrorPage() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Authentication Error</CardTitle>
                    <CardDescription>
                        There was an error during the authentication process. Please try again.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Link href="/login" className="text-primary hover:underline">
                        Return to Login
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
}
